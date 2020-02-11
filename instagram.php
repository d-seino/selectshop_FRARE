<?php
//POSTリクエストの場合のみ受付
if($_SERVER['REQUEST_METHOD'] == 'POST'){

//インスタグラムのビジネスID
$instagram_business_id='17841429236434125'; 

//フェイスブックページのアクセストークン（第三弾トークン）
$access_token='EAAkm1M6rSBIBABDf25fV3U8LV5BZBmFpu4JoiEiy3Dme2T1XgOL2ZCyGV0X0uTcLY1xyCNZAQWdZA4sSdDPZCix0brEiCYgXxNm60tE6XcZA48oXWpoKo8Y0zLBkfOezN2tsxqj3XK5WQEZBArZBwqhxV3Am6EXoCdR4g6uGQb0VBLtNEz7ZBqZBDa8pWVjKDwyZAQZD'; 




echo @file_get_contents('https://graph.facebook.com/v6.0/'.$instagram_business_id."?fields=business_discovery.username(s.flare121){id,followers_count,media_count,ig_id,media{media_url,permalink}}&access_token=".$access_token);


//終了
exit;

}
?>

