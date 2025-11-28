use serde::Serialize;
use tuono_lib::{Props, Request, Response};

#[derive(Serialize)]
struct MyResponse {
    views: u32,
}

#[tuono_lib::handler]
async fn get_server_side_props(_req: Request) -> Response {
    Response::Props(Props::new(MyResponse { views: 2 }))
}
