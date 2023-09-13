import { useEffect } from 'react';
import { useCookies } from 'react-cookie';

type Theme = 'light' | 'dark';

const useTheme = (defaultTheme: Theme) => {
    const [cookies, setCookie] = useCookies(['theme']);

    useEffect(() => {
        const theme = cookies.theme || defaultTheme;
        switch (theme) {
            case 'light':
                document.body.setAttribute('data-bs-theme', 'light')
                break;
            case 'dark':
                document.body.setAttribute('data-bs-theme', 'dark')
                break;
            default:
                break;
        }
    }, [cookies])

    const changeTheme = (theme: Theme) => {
        setCookie('theme', theme);
    };

    return changeTheme
}

export default useTheme;