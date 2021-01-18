import sizeof from 'object-sizeof';

export default function Index({ data }) {
  return JSON.stringify(data);
}

export async function getServerSideProps({ res }) {
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=10, stale-while-revalidate=59',
  );

  return {
    props: {
      data: {
        foo: 'bar',
        active: true,
        domain: 'dev.metalabs.io',
      }
    }
  };
}
