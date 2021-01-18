<form method="post" action="send_mail" style="display: flex; flex-direction: column; width: 300px">
    @csrf
    <input type="hidden" value="1" name="id">
    <label>subject</label>
    <input type="text" value="" name="subject">
    <label>email</label>
    <input type="email" value="" name="email">
    <label>name</label>
    <input type="name" value="" name="name">
    <label>title</label>
    <input type="text" value="" name="title">
    <label>description</label>
    <textarea type="text" value="" name="description" placeholder="text"></textarea>
    <input type="submit" placeholder="send">
</form>

<form method="post" action="account/get-log">
    @csrf
    <input type="submit" placeholder="send">
</form>
