use pulldown_cmark;
use serde::Deserialize;
use tuono_lib::Request;

#[derive(Deserialize)]
struct Body {
    pub input: String,
}

#[tuono_lib::api(POST)]
pub async fn parse(req: Request) -> String {
    let body: Body = req.body().unwrap();
    let parser = pulldown_cmark::Parser::new(&body.input);
    let mut html_output = String::new();
    pulldown_cmark::html::push_html(&mut html_output, parser);
    html_output
}
