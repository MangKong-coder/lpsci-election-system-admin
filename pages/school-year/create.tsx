// ANCHOR React
import React from 'react';

// ANCHOR Next
import dynamic from 'next/dynamic';

// ANCHOR Components
import { MetaOpenGraph } from '@components/head/MetaOpenGraph';
import { LpsciAppHead } from '@components/head/LpsciAppHead';
import { Loader } from '@components/utils/Loader';

const LpsciCreateSchoolYear = dynamic<any>(
  () => (
    import('@components/school-year/LpsciCreateSchoolYear')
      .then((mod) => mod.LpsciCreateSchoolYear)
  ),
  {
    loading: () => <Loader />,
  },
);

// eslint-disable-next-line import/no-default-export
export default React.memo(() => (
  <>
    <LpsciAppHead
      title="LPSci Admin | Create School Year"
      description="Sign in to your Las Piñas City National Science High School account"
    >
      <MetaOpenGraph
        url="https://lpsci-admin.now.sh/school-year/create"
        title="LPSci Admin | Create School Year"
        description="Sign in to your Las Piñas City National Science High School account"
        width="1366"
        height="768"
        image="/img/lpsci-logo.png"
      />
    </LpsciAppHead>
    <LpsciCreateSchoolYear />
  </>
));
