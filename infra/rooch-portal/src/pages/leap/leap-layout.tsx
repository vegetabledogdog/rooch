// Copyright (c) RoochNetwork
// SPDX-License-Identifier: Apache-2.0

import { useTranslation } from 'react-i18next'
import { ComingSoon } from '@/components/coming-soon.tsx'

export const LeapLayout = () => {
  const { t } = useTranslation()
  return (
    <div className="h-full flex-1 flex-col space-y-6 flex rounded-lg md:shadow-custom md:p-4 md:dark:shadow-muted">
      <div className="flex items-center justify-between space-y-2">
        <span>
          <h1 className="text-3xl font-bold tracking-tight">{t('Leap.title')}</h1>
          <p className="text-muted-foreground text-wrap">{t('Leap.subTitle')}</p>
        </span>
      </div>
      <ComingSoon />
    </div>
  )
}
