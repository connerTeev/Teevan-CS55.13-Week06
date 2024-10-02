import { getFruitIds, getFruitData } from '../../lib/fruit-data-firebase';
import { getVeggieIds, getVeggieData } from '../../lib/veggie-data-firebase';
import Layout from '../../components/layout';

// define getStaticProps() function - by nextJS
export async function getStaticProps({ params }) {
  const fruitItemData = await getFruitData(params.id);
  const veggieItemData = await getVeggieData(params.id);
  return {
    props: {
      fruitItemData: fruitItemData || null,
      veggieItemData: veggieItemData || null,
    },
  };
}

// define getStaticPaths() - by nextJS
export async function getStaticPaths() {
  const fruitPaths = await getFruitIds();
  const veggiePaths = await getVeggieIds();

  return {
    paths: [...fruitPaths, ...veggiePaths],
    fallback: false,
  };
}

//export our dynamically routed page component 'Entry'
export default function Entry({ fruitItemData, veggieItemData }) {
  return (
    <Layout>
      <article className="card col-6">
        <div className="card-body">
          {fruitItemData && (
            <>
              <h2 className="card-title">{fruitItemData.icon}</h2>
              <h3 className="card-subtitle mb-2 text-body-secondary">
                {fruitItemData.name}
              </h3>
              <p className="card-text">{fruitItemData.description}</p>
              <p className="card-text">{fruitItemData.rating}</p>
              <ul>
                {fruitItemData.dishes &&
                  fruitItemData.dishes.map(({ id, name }) => (
                    <li key={id}>{name}</li>
                  ))}
              </ul>
            </>
          )}
          {veggieItemData && (
            <>
              <h2 className="card-title">{veggieItemData.icon}</h2>
              <h3 className="card-subtitle mb-2 text-body-secondary">
                {veggieItemData.name}
              </h3>
              <p className="card-text">{veggieItemData.description}</p>
              <p className="card-text">{veggieItemData.rating}</p>
              <ul>
                {veggieItemData.dishes &&
                  veggieItemData.dishes.map(({ id, name }) => (
                    <li key={id}>{name}</li>
                  ))}
              </ul>
            </>
          )}
        </div>
      </article>
    </Layout>
  );
}
