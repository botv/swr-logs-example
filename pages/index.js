export default function Index({ date }) {
  return `${date}`;
}

export async function getServerSideProps({ res }) {
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=10, stale-while-revalidate=59'
  );

  return {
    props: {
      date: new Date()
    }
  };
}
