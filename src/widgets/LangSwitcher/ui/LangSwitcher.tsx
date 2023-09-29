import { classNames } from 'shared/lib/classNames/classNames';
import cls from './LangSwitcher.module.scss';
import { useTranslation } from 'react-i18next';
import { Button } from 'widgets/Button';
import { ThemeButton } from 'widgets/Button/ui/Button';

interface LangSwitcherProps {
    className?: string;
};

export const LangSwitcher = ({ className }: LangSwitcherProps) => {

    const { t, i18n } = useTranslation();

    const toggle = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    }

    return <Button
        className={classNames(cls.LangSwitcher, {}, [className])}
        theme={ThemeButton.CLEAR}
        onClick={toggle}
    >
        {t('Язык')}
    </Button>
};