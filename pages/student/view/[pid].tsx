// ANCHOR React
import React from 'react';

// ANCHOR Next
import dynamic from 'next/dynamic';
import { GetServerSideProps } from 'next';

// ANCHOR Components
import { MetaOpenGraph } from '@components/head/MetaOpenGraph';
import { LpsciAppHead } from '@components/head/LpsciAppHead';
import { Loader } from '@components/utils/Loader';

// ANCHOR API
import { IStudentResult } from '@api/results/student';
import { getStudentById } from '@api/student';

// ANCHOR Utils
import { ParsedUrlQuery } from 'querystring';

interface IProps {
  id: string;
  data: IStudentResult;
}
interface IParams extends ParsedUrlQuery {
  pid: string;
}

export const getServerSideProps: GetServerSideProps<IProps, IParams> = async (context) => {
  if (!context.params) {
    throw new Error('Missing pid');
  }

  const id = context.params.pid;

  const data = await getStudentById({ id });

  return {
    props: {
      data,
      id,
    },
  };
};

interface IMainProps {
  id: string;
  initialData: IStudentResult;
}

const LpsciIndividualStudent = dynamic<IMainProps>(
  () => (
    import('@components/student/LpsciIndividualStudent')
      .then((mod) => mod.LpsciIndividualStudent)
  ),
  {
    loading: () => <Loader />,
  },
);

// eslint-disable-next-line import/no-default-export
export default ({ data, id }: IProps) => {
  // SSG may return with empty props.
  if (!data) {
    return <Loader />;
  }

  // Fetch provider data
  const title = `LPSci Admin | Student ${data.user.lastName}`;
  return (
    <>
      <LpsciAppHead
        title={title}
        description="Sign in to your Las Piñas City National Science High School account"
      >
        <MetaOpenGraph
          url={`https://lpsci-admin.now.sh/student/view/${data.id}`}
          title={title}
          description="Sign in to your Las Piñas City National Science High School account"
          width="1366"
          height="768"
          image="/img/lpsci-logo.png"
        />
      </LpsciAppHead>
      <LpsciIndividualStudent id={id} initialData={data} />
    </>
  );
};
