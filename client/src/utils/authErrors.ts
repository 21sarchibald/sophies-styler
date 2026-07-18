import type { AuthError } from "@supabase/supabase-js";

export function getRegistrationError(error: AuthError): string {
    switch (error.code) {
        case "user_already_exists":
            return "An account already exists with this email address.";
        case "weak_password":
            return error.message
        default:
            return "Unable to register new user. Please try again."
    }

}

export function getSignInError(error: AuthError): string {
    switch (error.code) {
        case "invalid_credentials":
            return "Invalid login credentials. Please try again."
        default: 
            return "Something went wrong while signing you in. Please try again later."
    }

}