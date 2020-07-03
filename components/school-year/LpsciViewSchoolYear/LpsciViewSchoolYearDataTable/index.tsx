// ANCHOR React
import * as React from 'react';

// ANCHOR Next
import { useRouter } from 'next/router';

// ANCHOR Base
import { RowActionT } from 'baseui/data-table';
import { Show } from 'baseui/icon';

// ANCHOR Constants
import { columns } from '@constants/school-year';

// ANCHOR Models
import { SchoolYearData } from '@scoped-models/school-year/SchoolYearData';

// ANCHOR Interfaces
import { IRow } from '@interfaces/DataTable';

// ANCHOR Component
import { DataTable } from '@components/utils/DataTable';

// ANCHOR Hooks
import { useConstant } from '@lpsci/hooks';

export const LpsciViewSchoolYearDataTable = React.memo(() => {
  const router = useRouter();

  const data = SchoolYearData.useSelector((state) => state.data);

  const rowActions: RowActionT[] = useConstant(() => ([
    {
      label: 'Sections',
      onClick: ({ row }) => router.push(`/school-year/view/${row.id}`),
      renderIcon: Show,
    },
  ]));

  if (!data) {
    return null;
  }

  const rows: IRow[] = data.map((r) => ({
    id: r.id,
    data: r.year.split('-'),
  }));

  return (
    <DataTable
      columns={columns}
      rows={rows}
      rowActions={rowActions}
    />
  );
});
