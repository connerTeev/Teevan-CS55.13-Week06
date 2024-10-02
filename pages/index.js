import Link from 'next/link';
import Layout from '../components/layout';
import { getSortedFruitsList } from '../lib/fruit-data-firebase';
import { getSortedVeggiesList } from '../lib/veggie-data-firebase';

// define a getStaticProps() function -this name is defined by next.js
export async function getStaticProps() {
  const fruitDataList = await getSortedFruitsList();
  const veggieDataList = await getSortedVeggiesList();
  return {
    props: { fruitDataList, veggieDataList },
  };
}

// Building root page and exporting
export default function Home({ fruitDataList, veggieDataList }) {
  return (
    <Layout home>
      <h1>Food Repo</h1>
      <h2 className="m-3">Fruits</h2>
      <div className="list-group">
        {fruitDataList &&
          fruitDataList.map(({ id, name }) => (
            <Link
              key={id}
              href={`/foods/${id}`}
              className="list-group-item list-group-item-action"
            >
              {name}
            </Link>
          ))}
      </div>
      <h2 className="m-3">Veggies</h2>
      <div className="list-group">
        {veggieDataList &&
          veggieDataList.map(({ id, name }) => (
            <Link
              key={id}
              href={`/foods/${id}`}
              className="list-group-item list-group-item-action"
            >
              {name}
            </Link>
          ))}
      </div>
    </Layout>
  );
}
