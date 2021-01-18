export default function Index({ date }) {
  return `${date}`;
}

export async function getServerSideProps({ res }) {
  await new Promise(res => setTimeout(res, 3000))

  res.setHeader(
    'Cache-Control',
    'public,s-maxage=10,stale-while-revalidate=60,stale-if-error=86400',
  );

  return {
    props: {
      date: new Date()
    }
  };
}
