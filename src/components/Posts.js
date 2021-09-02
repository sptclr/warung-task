import React, {useState, useEffect} from 'react';
import { StaticImage } from "gatsby-plugin-image";
import axios from 'axios';


function Posts() {

  const [result, setResult] = useState([]);
  const [hasLoading, setHasLoading] = useState(true);

  const POSTS_QUERY=`
  query AllPostsQuery {
    posts {
      id
      data {
        title
        total_comments
        total_likes
        body {
          html
          markdown
          text
        }
        thumbnail {
          file_name
          id
          url
        }
      }
    }
  }
  `

  
  useEffect( () =>{

    axios({
      url    : `${process.env.URL}`,
      method : 'post',
      headers: {  Authorization: `Bearer ${process.env.TOKEN}` },
      data   : { query: POSTS_QUERY }
    }).then((result) => {
      const posts = result.data.data.posts;
      if(Array.isArray(posts) && posts.length > 0 ){
        // console.log('posts', posts)
        setResult(posts)
        setHasLoading(false)
      } else {
        setHasLoading(true);
      }
    });
  }, [hasLoading, POSTS_QUERY]);

  if(hasLoading) return <p className="has-text-centered my-6 is-size-3">Loading...</p>
  
  return (
    <section className="Posts container">
      <h2 className="title line-50 is-inline-block">
        Today post top Posts to visit
      </h2>

      <div className="columns is-flex-wrap-wrap is-justify-content-center is-align-items-center">

        {/* {
          result.map( (val, idx) => {
            return (
              <div className="column relative p-3">
                <div className="logo-section relative">
                  <StaticImage src={val.data.thumbnail.url} alt={val.data.thumbnail.url} />
                  <div className="info is-flex is-flex-direction-row is-flex-wrap-nowrap is-justify-content-space-between absolute p-4 is-full">
                    <h4 className="title is-size-3 has-text-white is-inline-block m-0">Tokyo</h4>

                    <div className="sub-info is-inline-block my-auto">
                      <div className="is-inline-block has-text-white mr-2">
                        <p className="is-inline-block pr-2">221</p>
                        <StaticImage src="../images/love.png" width={24} alt="Logo Odigo" />
                      </div>

                      <div className="is-inline-block has-text-white">
                        <p className="is-inline-block pr-2">221</p>
                        <StaticImage src="../images/comment.png" width={24} alt="Logo Odigo" />
                      </div>
                    </div>
                  </div>
                </div>
                <p className="mt-5">
                {val.}
                </p>
              </div>
            )
          })
        } */}

        <div className="column relative p-3">
          <div className="logo-section relative">
            <StaticImage src="../images/hero-images.png" alt="Logo Odigo" />
            <div className="info is-flex is-flex-direction-row is-flex-wrap-nowrap is-justify-content-space-between absolute p-4 is-full">
              <h4 className="title is-size-3 has-text-white is-inline-block m-0">Tokyo</h4>

              <div className="sub-info is-inline-block my-auto">
                <div className="is-inline-block has-text-white mr-2">
                  <p className="is-inline-block pr-2">221</p>
                  <StaticImage src="../images/love.png" width={24} alt="Logo Odigo" />
                </div>

                <div className="is-inline-block has-text-white">
                  <p className="is-inline-block pr-2">221</p>
                  <StaticImage src="../images/comment.png" width={24} alt="Logo Odigo" />
                </div>
              </div>
            </div>
          </div>
          <p className="mt-5">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe explicabo porro reprehenderit amet ullam beatae, eum velit in, neque possimus corrupti harum dicta laboriosam. Voluptatibus cupiditate mollitia assumenda sint culpa?
          </p>
        </div>
        <div className="column is-one-third relative p-3">
        <div className="logo-section relative">
            <StaticImage src="../images/hero-images.png" alt="Logo Odigo" />
            <div className="info is-flex is-flex-direction-row is-flex-wrap-nowrap is-justify-content-space-between absolute p-4 is-full">
              <h4 className="title is-size-3 has-text-white is-inline-block m-0">Tokyo</h4>

              <div className="sub-info is-inline-block my-auto">
                <div className="is-inline-block has-text-white mr-2">
                  <p className="is-inline-block pr-2">221</p>
                  <StaticImage src="../images/love.png" width={24} alt="Logo Odigo" />
                </div>

                <div className="is-inline-block has-text-white">
                  <p className="is-inline-block pr-2">221</p>
                  <StaticImage src="../images/comment.png" width={24} alt="Logo Odigo" />
                </div>
              </div>
            </div>
          </div>
          <p className="mt-5">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe explicabo porro reprehenderit amet ullam beatae, eum velit in, neque possimus corrupti harum dicta laboriosam. Voluptatibus cupiditate mollitia assumenda sint culpa?
          </p>
        </div>
        <div className="column is-one-third relative p-3">
        <div className="logo-section relative">
            <StaticImage src="../images/hero-images.png" alt="Logo Odigo" />
            <div className="info is-flex is-flex-direction-row is-flex-wrap-nowrap is-justify-content-space-between absolute p-4 is-full">
              <h4 className="title is-size-3 has-text-white is-inline-block m-0">Tokyo</h4>

              <div className="sub-info is-inline-block my-auto">
                <div className="is-inline-block has-text-white mr-2">
                  <p className="is-inline-block pr-2">221</p>
                  <StaticImage src="../images/love.png" width={24} alt="Logo Odigo" />
                </div>

                <div className="is-inline-block has-text-white">
                  <p className="is-inline-block pr-2">221</p>
                  <StaticImage src="../images/comment.png" width={24} alt="Logo Odigo" />
                </div>
              </div>
            </div>
          </div>
          <p className="mt-5">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe explicabo porro reprehenderit amet ullam beatae, eum velit in, neque possimus corrupti harum dicta laboriosam. Voluptatibus cupiditate mollitia assumenda sint culpa?
          </p>
        </div>
        <div className="column is-one-third relative p-3">
        <div className="logo-section relative">
            <StaticImage src="../images/hero-images.png" alt="Logo Odigo" />
            <div className="info is-flex is-flex-direction-row is-flex-wrap-nowrap is-justify-content-space-between absolute p-4 is-full">
              <h4 className="title is-size-3 has-text-white is-inline-block m-0">Tokyo</h4>

              <div className="sub-info is-inline-block my-auto">
                <div className="is-inline-block has-text-white mr-2">
                  <p className="is-inline-block pr-2">221</p>
                  <StaticImage src="../images/love.png" width={24} alt="Logo Odigo" />
                </div>

                <div className="is-inline-block has-text-white">
                  <p className="is-inline-block pr-2">221</p>
                  <StaticImage src="../images/comment.png" width={24} alt="Logo Odigo" />
                </div>
              </div>
            </div>
          </div>
          <p className="mt-5">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe explicabo porro reprehenderit amet ullam beatae, eum velit in, neque possimus corrupti harum dicta laboriosam. Voluptatibus cupiditate mollitia assumenda sint culpa?
          </p>
        </div>
        <div className="column is-one-third relative p-3">
        <div className="logo-section relative">
            <StaticImage src="../images/hero-images.png" alt="Logo Odigo" />
            <div className="info is-flex is-flex-direction-row is-flex-wrap-nowrap is-justify-content-space-between absolute p-4 is-full">
              <h4 className="title is-size-3 has-text-white is-inline-block m-0">Tokyo</h4>

              <div className="sub-info is-inline-block my-auto">
                <div className="is-inline-block has-text-white mr-2">
                  <p className="is-inline-block pr-2">221</p>
                  <StaticImage src="../images/love.png" width={24} alt="Logo Odigo" />
                </div>

                <div className="is-inline-block has-text-white">
                  <p className="is-inline-block pr-2">221</p>
                  <StaticImage src="../images/comment.png" width={24} alt="Logo Odigo" />
                </div>
              </div>
            </div>
          </div>
          <p className="mt-5">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe explicabo porro reprehenderit amet ullam beatae, eum velit in, neque possimus corrupti harum dicta laboriosam. Voluptatibus cupiditate mollitia assumenda sint culpa?
          </p>
        </div>
        <div className="column is-one-third relative p-3">
        <div className="logo-section relative">
            <StaticImage src="../images/hero-images.png" alt="Logo Odigo" />
            <div className="info is-flex is-flex-direction-row is-flex-wrap-nowrap is-justify-content-space-between absolute p-4 is-full">
              <h4 className="title is-size-3 has-text-white is-inline-block m-0">Tokyo</h4>

              <div className="sub-info is-inline-block my-auto">
                <div className="is-inline-block has-text-white mr-2">
                  <p className="is-inline-block pr-2">221</p>
                  <StaticImage src="../images/love.png" width={24} alt="Logo Odigo" />
                </div>

                <div className="is-inline-block has-text-white">
                  <p className="is-inline-block pr-2">221</p>
                  <StaticImage src="../images/comment.png" width={24} alt="Logo Odigo" />
                </div>
              </div>
            </div>
          </div>
          <p className="mt-5">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe explicabo porro reprehenderit amet ullam beatae, eum velit in, neque possimus corrupti harum dicta laboriosam. Voluptatibus cupiditate mollitia assumenda sint culpa?
          </p>
        </div>
      </div>
    </section>
  )
}

export default Posts
