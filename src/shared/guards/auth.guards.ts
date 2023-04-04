import { useUser } from "../stores";

export function isAuthenticatedGuard() {
    const user = useUser();
    if (!user.isAuthenticated) {
        return "/admin";
    }
}
export function isNotAuthenticatedGuard() {
    const user = useUser();
    if (user.isAuthenticated) {
        return "/crud";
    }
}