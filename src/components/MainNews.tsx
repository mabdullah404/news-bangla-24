import Image from "next/image";

const MainNews = ({ news }) => {
  const firstNews = news[0] ;
  console.log(firstNews)
  return (
    <div className="card bg-base-100 w-96 shadow-sm">
      <div>
        <Image width={600} height={600} src={firstNews.imageUrl} alt=""></Image>
      </div>
      <div className="card-body">
        <h2 className="card-title">{firstNews.title}</h2>
        <p>
          {firstNews.description}
        </p>
        
      </div>
    </div>
  );
};

export default MainNews;
