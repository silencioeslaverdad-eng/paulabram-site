import { Link, useParams } from "react-router";
import { Ground, Header, FloatCTA, Footer } from "./Chrome";
import { POSTS, getPost, type Block } from "../content/posts";
import { CALENDLY } from "../content/offers";

function BlockView({ b }: { b: Block }) {
  switch (b.t) {
    case "h2":
      return <h2 className="g3-post-h2">{b.x}</h2>;
    case "h3":
      return <h3 className="g3-post-h3">{b.x}</h3>;
    case "quote":
      return <blockquote className="g3-post-quote">{b.x}</blockquote>;
    case "ul":
      return (
        <ul className="g3-post-list">
          {b.items.map((i, k) => (
            <li key={k}>{i}</li>
          ))}
        </ul>
      );
    case "ol":
      return (
        <ol className="g3-post-list">
          {b.items.map((i, k) => (
            <li key={k}>{i}</li>
          ))}
        </ol>
      );
    default:
      return <p className="g3-post-p">{b.x}</p>;
  }
}

export function BlogIndex() {
  return (
    <div className="g3">
      <Ground />
      <div className="g3-page">
        <Header current="blog" />
        <main>
          <section className="g3-section">
            <div className="g3-inner">
              <h1>The Guarded Body.</h1>
              <div className="g3-blog-index">
                {POSTS.map((p, i) => (
                  <Link to={`/blog/${p.slug}`} className="g3-blog-card" key={p.slug}>
                    <div className="g3-blog-num">{String(POSTS.length - i).padStart(2, "0")}</div>
                    <div>
                      <h2>{p.title}</h2>
                      <div className="g3-blog-date">{p.date}</div>
                      <p>{p.excerpt}</p>
                      <span className="g3-blog-more">Read it →</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
      <FloatCTA />
    </div>
  );
}

export function BlogPost() {
  const { slug } = useParams();
  const post = slug ? getPost(slug) : undefined;
  if (!post) {
    return (
      <div className="g3">
        <Ground />
        <div className="g3-page">
          <Header current="blog" />
          <main>
            <section className="g3-section">
              <div className="g3-inner">
                <h1>Post not found.</h1>
                <p className="g3-standfirst">
                  <Link to="/blog">Back to The Guarded Body →</Link>
                </p>
              </div>
            </section>
          </main>
          <Footer />
        </div>
        <FloatCTA />
      </div>
    );
  }
  return (
    <div className="g3">
      <Ground />
      <div className="g3-page">
        <Header current="blog" />
        <main>
          <section className="g3-section">
            <div className="g3-inner g3-post">
              <div className="g3-post-kicker">
                <Link to="/blog">The Guarded Body</Link> · {post.date}
              </div>
              <h1>{post.title}</h1>
              {post.blocks.map((b, i) => (
                <BlockView b={b} key={i} />
              ))}
              <div className="g3-post-cta">
                <p>
                  This is the work I do every morning, live and free. Come and feel
                  it for yourself.
                </p>
                <a className="g3-cta" href={CALENDLY} target="_blank" rel="noopener">
                  Book a free 20-minute call
                </a>
              </div>
              <p className="g3-post-back">
                <Link to="/blog">← All posts</Link>
              </p>
            </div>
          </section>
        </main>
        <Footer />
      </div>
      <FloatCTA />
    </div>
  );
}
