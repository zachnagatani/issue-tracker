<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\URL;
use DB;

class IssuesController extends Controller
{
    public function getAll(Request $request, Response $response) {
        $issues = json_decode(Db::table('issues')->orderBy('status', 'desc')->get());
        $JSONissues = array('data' => array());

        foreach($issues as $issue) {
            array_push(
                $JSONissues['data'],
                array(
                    'id' => $issue->id,
                    'type' => 'issue',
                    'attributes' => array(
                        'customerName' => $issue->customer_name,
                        'customerEmail' => $issue->customer_email,
                        'description' => $issue->description,
                        'status' => $issue->status,
                        'openedAt' => $issue->opened_at,
                        'closedAt' => $issue->closed_at
                    )
                )
            );
        }

        return response()->json($JSONissues);
    }

    public function getSingle(Request $request, Response $response) {
        $issue = Db::table('issues')->where('id', $request->id)->first();
        $JSONissue = array(
            'data' => array(
                'id' => $issue->id,
                'type' => 'issue',
                'attributes' => array(
                    'customerName' => $issue->customer_name,
                    'customerEmail' => $issue->customer_email,
                    'description' => $issue->description,
                    'status' => $issue->status,
                    'openedAt' => $issue->opened_at,
                    'closedAt' => $issue->closed_at
                )
            )
        );

        return json_encode($JSONissue);
    }

    public function add(Request $request) {
        try {
            $user = Auth::user();
            $name = $user->name;
            $email = $user->email;
            $description = $request->input('description');

            DB::table('issues')->insert(
                array(
                    'customer_name' => $name,
                    'customer_email' => $email,
                    'description' => $description
                )
            );

            echo 'Issued has been submitted';
        } catch (Exception $e) {
            echo $e;
        }
    }

    public function close(Request $request, Response $response) {
        try {
            Db::table('issues')
                ->where('id', $request->id)
                ->update(['status' => false]);

            return json_encode(array(
                'data' => array(
                    'message' => 'Issue closed',
                    'success' => true,
                    'error' => false
                )
            ));
        } catch (Exception $e) {
            return $e;
        }
    }
}
