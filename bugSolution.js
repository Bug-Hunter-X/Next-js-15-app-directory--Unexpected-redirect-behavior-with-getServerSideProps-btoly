```javascript
// pages/index.js

import { redirect } from 'next/navigation';

export default function Home() {
  return (
    <div>Hello World</div>
  );
}

export async function getServerSideProps(context) {
  // Simulate some condition to trigger redirect
  const shouldRedirect = true;

  if (shouldRedirect) {
    redirect('/about'); // Use redirect from next/navigation
  }

  return {
    props: {},
  };
}
```