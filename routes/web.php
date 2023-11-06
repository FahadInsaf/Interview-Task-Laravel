<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

//Route::get('/', function () {
//    return view('frontend.layout.header');
//});
// Route::get('/', function () {
//    return view('frontend.layout.header');
// });




Auth::routes(['verify' => true]);

Route::get('/admin/login', function () {
    return view('auth.login');
});

Route::get('/admin/login', [App\Http\Controllers\Auth\LoginController::class, 'login']);
Route::post('/admin/userlogin', [App\Http\Controllers\Auth\LoginController::class, 'userlogin']);

Route::post('/admin/upload_file', [App\Http\Controllers\Settings\SettingsController::class, 'upload_file'])->name('upload_file');

Route::group(['middleware' =>['auth', 'admin']], function()
{
 Route::prefix('admin')->group(function () {
   
 Route::get('/adminlogout', [App\Http\Controllers\User\UserController::class, 'adminlogout']);
    Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('Dashboards');
    // Role
    Route::get('/deleterole/{id}',[App\Http\Controllers\User\UserController::class, 'deleterole']);
    Route::get('roles', [App\Http\Controllers\User\UserController::class, 'roles'])->name('roles');
    Route::get('role/{id?}',[App\Http\Controllers\User\UserController::class, 'role']);
    Route::post('/saverole', [App\Http\Controllers\User\UserController::class, 'saverole']);
     //Users
    Route::get('/deleteuser/{id}', [App\Http\Controllers\User\UserController::class, 'deleteuser']);
    Route::get('users', [App\Http\Controllers\User\UserController::class, 'users'])->name('users');
    Route::get('user/{id?}', [App\Http\Controllers\User\UserController::class, 'user']);
    Route::post('/saveuser', [App\Http\Controllers\User\UserController::class, 'saveuser']);
    Route::post('/userstatus', [App\Http\Controllers\User\UserController::class, 'userstatus']);
    Route::post('/upload_dp', [App\Http\Controllers\User\UserController::class, 'upload_dp']);
   
    // Profile

   Route::get('/profile',[App\Http\Controllers\User\UserController::class,'profile'])->name('profile');

   Route::get('/view_feedback',[App\Http\Controllers\Contact\ContactController::class,'view_feedback'])->name('view_feedback');

   Route::get('/change_status/{status}/{id?}',[App\Http\Controllers\Contact\ContactController::class, 'change_status'])->name('change_status');

 Route::get('/view_comment/{id}',[App\Http\Controllers\Contact\ContactController::class,'view_comment'])->name('view_comment');
   


});

});


Route::get('/', function () {
    return redirect('/');
});

// Seller Routes
Route::get('/',[App\Http\Controllers\Frontend\HomeController::class,'home'])->name('home');




Route::get('/login',[App\Http\Controllers\Frontend\HomeController::class,'login'])->name('login');

Route::get('/register',[App\Http\Controllers\Frontend\HomeController::class,'register'])->name('register');

Route::post('/userregister',[App\Http\Controllers\Auth\RegisterController::class, 'userregister'])->name('userregister');

Route::post('/userregister_buyer',[App\Http\Controllers\Auth\RegisterController::class, 'userregister_buyer'])->name('userregister_buyer');

Route::post('/userlogin',[App\Http\Controllers\Frontend\HomeController::class, 'userlogin'])->name('userlogin');


Route::get('/userdashboard',[App\Http\Controllers\Frontend\HomeController::class, 'userdashboard'])->name('userdashboard');

Route::get('/userlogout',[App\Http\Controllers\Frontend\HomeController::class, 'userlogout'])->name('userlogout');

Route::get('/userprofile',[App\Http\Controllers\Frontend\HomeController::class, 'userprofile'])->name('userprofile');

Route::post('/updateuser', [App\Http\Controllers\Frontend\HomeController::class, 'updateuser']);

Route::post('/savecontact', [App\Http\Controllers\Frontend\HomeController::class, 'savecontact']);

Route::get('/view_feedback',[App\Http\Controllers\Frontend\HomeController::class, 'view_feedback'])->name('view_feedback');
Route::get('/add_comment/{id}',[App\Http\Controllers\Frontend\HomeController::class, 'add_comment'])->name('add_comment');
Route::post('/savecomment/{id}', [App\Http\Controllers\Frontend\HomeController::class, 'savecomment']);
Route::get('/view_comment/{id}', [App\Http\Controllers\Frontend\HomeController::class, 'view_comment']);