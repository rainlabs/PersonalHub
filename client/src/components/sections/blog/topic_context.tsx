import React from "react";
import { BlogTopic } from "../../../types/blog_topic.enum";

interface IBlogContext {
    topic?: BlogTopic | undefined,
    setTopic?: (newTopic: BlogTopic) => void;
}

const defaultState = {
}

const BlogContext = React.createContext<IBlogContext>(defaultState)
export default BlogContext