import './Portfolio.scss';
import PortfolioLIst from '../portfolioList/PortfolioLIst';
import { useEffect, useState } from 'react';

import {
  featuredPortfolio,
  contentPortfolio,
  webPortfolio,
  designPortfolio,
  mobilePortfolio,
} from '../../data';

const Portfolio = () => {
  const [selected, setSelected] = useState('featured');
  const [data, setData] = useState([]);

  const list = [
    {
      id: 'featured',
      title: 'Featured',
    },
    {
      id: 'web',
      title: 'Web App',
    },
    {
      id: 'mobile',
      title: 'Mobile App',
    },
    {
      id: 'design',
      title: 'Design',
    },
    {
      id: 'content',
      title: 'Content',
    },
  ];

  useEffect(() => {
    switch (selected) {
      case 'featured':
        setData(featuredPortfolio);
        break;
      case 'web':
        setData(webPortfolio);
        break;
      case 'mobile':
        setData(mobilePortfolio);
        break;
      case 'design':
        setData(designPortfolio);
        break;
      case 'content':
        setData(contentPortfolio);
        break;
      default:
        setData(featuredPortfolio);
    }
  }, [selected]);

  return (
    <div className="portfolio" id="portfolio">
      <h1 className="">Portfolio</h1>
      <ul>
        {list.map((item) => (
          <PortfolioLIst
            key={item.id}
            id={item.id}
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
          />
        ))}
      </ul>

      <div className="container">
        {data.map((item) => (
          <div key={item.id} className="item">
            <img src={item.img} alt={item.title} />
            <h3>{item.title}</h3>
          </div>
        ))}
        {/*  <div className="item">*/}
        {/*    <img*/}
        {/*      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKvdHn8GmPGCO0y3SJqNHACygpm0h9VycMHg&usqp=CAU"*/}
        {/*      alt="Banking App"*/}
        {/*    />*/}
        {/*    <h3>Banking App</h3>*/}
        {/*  </div>*/}

        {/*  <div className="item">*/}
        {/*    <img*/}
        {/*      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKvdHn8GmPGCO0y3SJqNHACygpm0h9VycMHg&usqp=CAU"*/}
        {/*      alt="Banking App"*/}
        {/*    />*/}
        {/*    <h3>Banking App</h3>*/}
        {/*  </div>*/}

        {/*  <div className="item">*/}
        {/*    <img*/}
        {/*      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKvdHn8GmPGCO0y3SJqNHACygpm0h9VycMHg&usqp=CAU"*/}
        {/*      alt="Banking App"*/}
        {/*    />*/}
        {/*    <h3>Banking App</h3>*/}
        {/*  </div>*/}

        {/*  <div className="item">*/}
        {/*    <img*/}
        {/*      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKvdHn8GmPGCO0y3SJqNHACygpm0h9VycMHg&usqp=CAU"*/}
        {/*      alt="Banking App"*/}
        {/*    />*/}
        {/*    <h3>Banking App</h3>*/}
        {/*  </div>*/}

        {/*  <div className="item">*/}
        {/*    <img*/}
        {/*      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKvdHn8GmPGCO0y3SJqNHACygpm0h9VycMHg&usqp=CAU"*/}
        {/*      alt="Banking App"*/}
        {/*    />*/}
        {/*    <h3>Banking App</h3>*/}
        {/*  </div>*/}
      </div>
    </div>
  );
};

export default Portfolio;
