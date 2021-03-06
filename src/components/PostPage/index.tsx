import * as React from "react";
import { Link } from "react-router-dom";

import { iconArrow } from "../../assets/index";
import { API, APIRSS, USER } from "../../utils/index";

interface PostPageProps {
  portfolio: any[];
  match: any;
}

interface PostPageState {
  post: {
    title: string;
    description: string;
  };
  error: any;
}

class PostPage extends React.Component<PostPageProps, PostPageState> {
  public state = {
    post: {
      title: "",
      description: ""
    },
    error: null
  };

  public componentDidMount() {
    window.scrollTo(0, 0);
    fetch(`${APIRSS}/v1/api.json?rss_url=${API}/feed/${USER}`)
      .then(res => res.json())
      .then(data => {
        const posts = data.items.map(item => ({
          id: item.guid.split("/").pop(),
          title: item.title,
          subtitle: item.description
            .split("<h4>")
            .pop()
            .split("</h4>")
            .shift(),
          description: item.description
        }));
        const post = posts.filter(
          item => item.id === this.props.match.params.id
        );
        this.setState({ post: post[0] });
      })
      .catch(error => this.setState({ error }));
  }

  public render() {
    const { post } = this.state;

    return (
      <div className="Work">
        <section className="b-work">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h1>{post.title}</h1>
                <div dangerouslySetInnerHTML={{ __html: post.description }} />
                <Link className="anchornav" to="/">
                  <img src={iconArrow} />
                  Home
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default PostPage;
