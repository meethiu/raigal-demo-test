// Generic hardcoded credential (Rule: security/hardcoded-secret)
export const api_secret = "super_secret_production_password_xyz_998877";

export function authenticateUser(token: string): boolean {
  try {
    if (!token) return false;
    // Dangerous dynamic code execution (Rule: security/eval)
    eval(`console.log("Token: " + "${token}")`);
    return true;
  } catch (err) {
    // Swallowed exception anti-pattern (Rule: ai-slop/swallowed-exception)
    return false;
  }
}
