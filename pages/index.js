import sizeof from 'object-sizeof';

export default function Index({ data }) {
  return JSON.stringify(data);
}

export async function getServerSideProps({ res }) {
  // await new Promise(res => setTimeout(res, 3000))

  res.setHeader(
    'Cache-Control',
    'public, s-maxage=1, stale-while-revalidate=59',
  );

  const data = {
    name: 'Meta Labs',
    active: true,
    domain: 'dev.metalabs.io',
    // stripe_account: 'acct_1GNqJkJDDtxs0Pqr',
    // guild: '528021205538570250',
    // branding: {
    //   logo: 'https://i.imgur.com/1cAkawA.png',
    //   background: 'https://i.imgur.com/LWV31Gc.jpg',
    //   primary_color: null,
    //   secondary_color: null
    // },
    // terms_of_service_url: 'https://metalabs.io/terms.html',
    // google_analytics_tracking_id: '',
    // google_tag_manager_container_id: '',
    // privacy_policy_url: 'https://metalabs.io/privacy.html',
    // website_url: 'https://metalabs.io',
    // support_email: 'support@metalabs.io',
    // name_placeholder: 'Lebron James',
    // email_placeholder: 'lebron@gmail.com',
    // settings: { payments: { cancel_action: 'remove_all_roles' } },
    // id: 'byiGC2l_6'
  }

  return {
    props: {
      data
    }
  };
}
