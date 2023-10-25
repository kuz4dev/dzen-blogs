import './styles/index.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from 'app/providers/ThemeProvider';
import { AppRouter } from 'app/providers/Router';
import { Navbar } from 'widgets/NavBar';
import { SideBar } from 'widgets/SideBar';

const App = () => {
    const { theme } = useTheme();

    return (
        <div className={classNames('App', {}, [theme])}>
            <Navbar />
            <div className='content-page'>
                <SideBar />
                <AppRouter />
            </div>
        </div>
    );
};

export default App;
