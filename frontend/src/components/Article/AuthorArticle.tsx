import React, { useContext, useEffect, useRef, useState } from "react";
import { MdFavoriteBorder } from "react-icons/md";
import { MdFavorite } from "react-icons/md";
import { FaRegComments } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import ArticleComments from "./Comments/ArticleCommentsMenu";
import { readingTime } from "reading-time-estimator";
import { useArticleContext } from "../../hooks/useArticleContext";
import { useAuthContext } from "../../hooks/useAuthContext";
import axios from "axios";
import NotLoggedInfos from "./NewArticle/NotLoggedInfos";

interface LikesInterface {
  articleid: string;
  id: string;
  userid: string;
}

const AuthorArticle = () => {
  const [favorite, setFavorite] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [likes, setLikes] = useState<number>(0);
  const [likeId, setLikeId] = useState<string>("");

  let { id } = useParams();
  const { article, getUserName, username, handleComments, allComments } =
    useArticleContext();
  const { currentUser, isLoggedIn } = useAuthContext();

  const handleLike = () => {
    axios
      .post(
        `http://localhost:5656/api/v1/articles/like/${id}`,
        { userid: currentUser?.uid },
        {
          headers: {
            "x-firebase-appcheck": `Bearer ${currentUser?.accessToken}`,
          },
        }
      )
      .then(function (response) {
        console.log({ like: response.data });
        setIsLiked(true);
        setLikes((prevLikes) => prevLikes + 1);
        setLikeId(response.data.id);
      })
      .catch(function (error) {
        console.log(error.message);
      });
  };

  useEffect(() => {
    getUserName(article.users[0].userId);
  }, []);

  useEffect(() => {
    axios
      .get(`http://localhost:5656/api/v1/article/like/${id}`)
      .then(function (response) {
        setLikes(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [article]);

  useEffect(() => {
    setIsLiked(false);
    if (currentUser) {
      const liked = article.likes.some(
        (like: LikesInterface) => like.userid === currentUser.uid
      );

      if (liked) {
        setLikes(likes);
        setIsLiked(true);
      }
    }
  }, [article, currentUser]);

  const dislike = async (id: any) => {
    const thisArticle = await axios
      .get(`http://localhost:5656/api/v1/article/${id}`)
      .then(function (response) {
        return response.data;
      })
      .catch(function (error) {
        console.log(error);
      });

    const liked = thisArticle.likes.filter(
      (like: LikesInterface) => like.userid === currentUser.uid
    );

    if (liked) {
      axios
        .delete(`http://localhost:5656/api/v1/articles/like/${liked[0].id}`, {
          headers: {
            "x-firebase-appcheck": `Bearer ${currentUser?.accessToken}`,
          },
        })
        .then((response) => {
          console.log(response.data);
          setLikes((prevLikes) => prevLikes - 1);
          setIsLiked(false);
        })
        .catch((error) => {
          console.error(error);
        });

      console.log(`http://localhost:5656/api/v1/articles/like/${liked[0].id}`);
    }

    return liked[0].id;
  };

  const time = readingTime(article.content, 238, "pt-br");
  return (
    <>
      {/* <button onClick={() => console.log(currentUser)}>Current user</button> */}

      <Link to={"/"} className="flex py-2">
        <div>
          <div className="h-12 w-12 rounded-full bg-purple-700 mr-4"></div>
        </div>
        <div className="flex flex-col ">
          <div className="flex">
            <h1 className="text-base font-bold mr-4">{username}</h1>
            <button className="text-sm italic text-purple-800 hover:text-purple-600">
              seguir
            </button>
          </div>
          <div className="text-sm text-gray-400 flex">
            <h4>{time.text}</h4>
          </div>
        </div>
      </Link>
      <div className="divider py-2"></div>
      <div className="flex py-3">
        {isLoggedIn ? (
          <>
            <div
              className="cursor-pointer flex items-center mr-5 "
              onClick={() => setFavorite(!favorite)}
            >
              {isLiked ? (
                <MdFavorite
                  className="text-2xl text-purple-500"
                  onClick={() => dislike(id)}
                />
              ) : (
                <MdFavoriteBorder
                  className="text-2xl text-purple-500"
                  onClick={handleLike}
                />
              )}
              <span className="text-sm text-gray-500 ml-2">{likes}</span>
            </div>
            <div
              className="flex items-center cursor-pointer"
              onClick={handleComments}
            >
              <FaRegComments className="text-2xl text-purple-500" />
              <span className="text-sm text-gray-500 ml-2">
                {allComments.length}
              </span>
            </div>
          </>
        ) : (
          <NotLoggedInfos likes={likes} />
        )}
      </div>
      <div className="divider"></div>
    </>
  );
};

export default AuthorArticle;
