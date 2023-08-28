export function formDate(dateString: string): string {
    return new Date(dateString).toLocaleDateString(
        "en-GB",
        {
            day:"numeric",
            month:"short",
            year:"numeric",
            hour:"numeric",
            minute:"numeric"
        }
    )
}