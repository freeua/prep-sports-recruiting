<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use App\Coach;


class MailController extends Controller
{
    /* This is email-page */
    public function index() {
        return view('emails.send_mail');
    }
    /* end */

    /* This is test page form email */
    public function indexForm() {
        return view('emails.test_form_send_mail');
    }
    /* end */

    public function sendMail(Request $request) {
        $data = new \stdClass();
        $coach = Coach::where('id', '=', $request->input('id'))->first();
        $data->coach_email = $coach->head_coach_email;
        $data->user_email = $request->input('email');
        $data->name = $request->input('name');
        $data->subject = $request->input('subject');
        $data->title = $request->input('title');
        $data->description = $request->input('description');

        Mail::send('emails.send_mail', ['data'=>$data], function ($message) use ($data) {
            $message->to($data->coach_email, 'Prep Sports Recruiting')->subject($data->subject);
            $message->from($data->user_email, 'Prep Sports Recruiting');
            $message->replyTo($data->user_email);
        });

        return response()->json(['msg' => 'Mail send', 'status' => 'Successeful']);
    }
}
