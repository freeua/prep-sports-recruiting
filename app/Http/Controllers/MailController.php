<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use App\Coach;
use Tymon\JWTAuth\Facades\JWTAuth;


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

    /**
     * @param  \Illuminate\Http\Request  $request (plan_user.id, coaches.id)
     * @return \Illuminate\Contracts\Validation\Validator
     */
    public function sendMail(Request $request) {
        $data = new \stdClass();
        $coach = Coach::where('id', '=', $request->input('id'))->first();
		$user = \Auth::user();
		if (null === $user) {
			return response()->json(['status' => 'unauthenticated']);
		}
		$sportId = $coach->sport_id;
		if ($user->sports->isNotEmpty() && $user->sports()->where('sport_user.sport_id', $sportId)->get()->isNotEmpty()) {
			$userSport = $user->sports()->where('sport_user.sport_id', $sportId)->first();
			if (0 < $userSport->pivot->count) {
				$data->coach_email = $coach->head_coach_email;
				$data->user_email = $user->email;
				$data->subject = $request->input('subject');
				$data->description = $request->input('description');
				// dd($data);

				Mail::send('emails.send_mail', ['data'=>$data], function ($message) use ($data) {
					$message->to($data->coach_email, 'Prep Sports Recruiting')->subject($data->subject);
					$message->from($data->user_email, 'Prep Sports Recruiting');
					// $message->replyTo($data->user_email);
				});

				// decrement count of sending mail
				$user->sports()->updateExistingPivot($sportId, ['count' => $userSport->pivot->count - 1]);

				return response()->json(['msg' => 'Mail send', 'status' => 'Successeful']);
			}
			else {
				return response()->json(['msg' => 'Mail did not send', 'status' => 'exceeding the limit']);
			}
		}
		else {
			return response()->json(['msg' => 'Mail did not send', 'status' => 'fail']);
		}
    }
}
