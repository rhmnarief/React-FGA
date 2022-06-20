import React from "react";
import { CardComp } from "../../components";

const blogData = [
  {
    title: "Lorem ipsum dolor",
    subtitle: "subtitle Blog 2",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Scelerisque viverra mauris in aliquam sem fringilla ut. Bibendum ut tristique et egestas. Morbi tristique senectus et netus et malesuada fames ac turpis. Molestie a iaculis at erat pellentesque adipiscing. Tortor posuere ac ut consequat semper viverra. Nunc pulvinar sapien et ligula ullamcorper. Porta nibh venenatis cras sed felis. Nunc faucibus a pellentesque sit amet. Malesuada fames ac turpis egestas maecenas. Faucibus vitae aliquet nec ullamcorper sit amet risus. Nunc mi ipsum faucibus vitae aliquet nec. Id aliquet lectus proin nibh nisl. Vel risus commodo viverra maecenas accumsan.",
  },
  {
    title: "Enim diam vulputate",
    subtitle: "subtitle Blog 2",
    description:
    "Enim diam vulputate ut pharetra sit amet aliquam. Et sollicitudin ac orci phasellus egestas tellus. Elit at imperdiet dui accumsan sit. Sem fringilla ut morbi tincidunt augue interdum velit euismod. Nibh mauris cursus mattis molestie a iaculis at erat pellentesque. Mauris cursus mattis molestie a. Volutpat diam ut venenatis tellus. "
  },  
  {
    title: "Volutpat est velit",
    subtitle: "subtitle Blog 3",
    description:
    "Volutpat est velit egestas dui id ornare arcu odio. Aliquam vestibulum morbi blandit cursus risus at ultrices mi. Egestas quis ipsum suspendisse ultrices gravida. Purus in mollis nunc sed id semper. "
  },
];

class RenderComponent extends React.Component {
  render() {
    return (
      <div>
        <h1>Render Component</h1>
        {
            blogData.map((blog, index) => {
                return(
                    <CardComp
                      title={blog.title}
                      subtitle={blog.subtitle}
                      description={blog.description}
                    />
                )
            }
            )
        }
      </div>
    );
  }
}

export default RenderComponent;
