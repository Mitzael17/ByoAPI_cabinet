import { Button } from '@shared/ui/button'
import { getTranslations } from 'next-intl/server'

export default async function Home() {
    const t = await getTranslations('Test')
    return (
        <>
            <Button>{t('title')}</Button>
        </>
    )
}
