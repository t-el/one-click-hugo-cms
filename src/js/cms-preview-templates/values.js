import React from "react";
import { List } from 'immutable';

import Jumbotron from "./components/jumbotron";

const MediaBlock = ({heading, text, imageUrl, reverse}) => {
  const imageContainerClassName = reverse
    ? "ph3-m w-50-m"
    : "ph3-m w-50-m order-last-m";
  return <div className="flex-m mhn3-m mb4">
    <div className={imageContainerClassName}>
      <img src={imageUrl} alt="" className="db mb2" />
    </div>
    <div className="ph3-m w-50-m">
      <h3 className="f3 b lh-title mb1">{heading}</h3>
      <p>{text}</p>
    </div>
  </div>;
};

export default class ValuesPreview extends React.Component {
  render() {

    
    return <div>
      <p>Welcome to TECH BOX, your ultimate destination for all things tech and programming! Our website is dedicated to keeping you up-to-date with the latest news, trends, and developments in the world of technology, as well as providing valuable resources and insights for programmers of all skill levels.

      Our team of experts is passionate about technology and programming, and we strive to deliver high-quality, informative content that is both engaging and accessible. Whether you're a seasoned developer or just starting out, TECH BOX has something for everyone.</p>

      <h1> Explore our site to discover a wealth of articles, tutorials, and reviews covering a wide range of topics, including:</h1>
      <ul>
        <li>Programming languages and frameworks</li>
        <li>Software development tools and methodologies</li>
        <li>
      Artificial intelligence and machine learning</li>
      <li>Cybersecurity and data privacy</li>
      <li>Mobile app development</li>
      <li>Web development and design</li>
      <li>Gaming and entertainment technology</li>
      <li>
      Hardware and gadgets</li>
      </ul>






      <p>In addition to our informative articles and tutorials, TECH BOX also offers a vibrant community forum where you can connect with other tech enthusiasts and developers from around the world. Share your ideas, ask for advice, and collaborate on projects with like-minded individuals who share your passion for technology.

      So what are you waiting for? Join the TECH BOX community today and take your tech and programming skills to the next level!</p>

      
      
    </div>;
  }
}
