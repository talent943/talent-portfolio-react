import React from "react";

const Blog = () => {
  const post = [
    {
      img: "https://res.cloudinary.com/practicaldev/image/fetch/s--4R20d9ME--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/e895b1b4ut7axzo20njc.png",
      title: "MERN stack project for beginners",
      url: "https://dev.to/shaifarfan08/mern-stack-project-for-beginners-59jf",
    },
    {
      img: "https://realpython.com/cdn-cgi/image/width=640,format=auto/https://files.realpython.com/media/Django-Rest-Framework-An-Introduction_Watermarked.7c1075fb2093.jpg",
      title: "Django Rest Framework – An Introduction",
      url: "https://realpython.com/django-rest-framework-quick-start/",
    },
  ];

  return (
    <section className="bg-primary text-white px-5 py-32" id="blog">
      <div className="container mx-auto grid md:grid-cols-2 items-center md:justify-between">
        <div className="about-info mb-5">
          <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[100px] border-indigo-600 pb-2">
            Blogs
          </h2>

          <p className="pb-5">Some of my best blogs.</p>
        </div>

        <div></div>
      </div>

      <div className="projects container mx-auto grid md:grid-cols-2 gap-10">
        {post.map((item) => {
          return (
            <div>
              <img src={item.img} alt={item.title} />
              <h3 className="py-5 text-2xl">{item.title}</h3>
              <a
                href={item.url}
                className=" btn bg-accent  border-2 border-[#7477FF] text-white px-6 py-3 hover:bg-transparent"
              >
                Read More
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Blog;