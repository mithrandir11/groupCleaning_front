export const useAuth = () => {
    const authUser = useState('auth_user', () => null);

    async function handleLogout() {
        await useFetch('/api/auth/logout', {
            method: 'POST',
        });

        authUser.value = null
        navigateTo('/');
    }
    
    return {authUser, handleLogout}
}