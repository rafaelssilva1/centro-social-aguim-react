import { Heading } from '../hero/Hero.styles';
import Assembly from './components/assembly/Assembly';
import Post from './components/post/Post';
import { AssembliesContainer, Container, PostsContainer } from './Posts.styles';

import { PropTypes } from './Posts.types';

const Posts: React.FC<PropTypes> = ({ attributes, ...props }) => {
    const { title, posts, assemblies } = attributes;

    return (
        <Container {...props}>
            <Heading level="2">{title}</Heading>
            <PostsContainer>
                {posts.map((post, index) => {
                    const {title, excerpt, thumbnail, date, link} = post;
                    
                    return (
                        <Post
                            key={index}
                            title={title}
                            excerpt={excerpt}
                            thumbnail={thumbnail}
                            date={date}
                            link={link}
                            isFirst={index === 0}
                        />
                    )
                })}
            </PostsContainer>
            <AssembliesContainer>
                {assemblies.map((assembly, index) => {
                    const {title, excerpt, date, link} = assembly;

                    return (
                        <Assembly key={index} title={title} excerpt={excerpt} date={date} link={link} />
                    )
                })}
            </AssembliesContainer>
        </Container>
    );
};

export default Posts;