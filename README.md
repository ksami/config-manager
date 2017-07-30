# config-manager

### TODO:
1. Hierarchical inheritance for config environments
    a. prod -> staging -> dev
    b. Customisation for additional environments
    c. Using file names
2. Prevent sensitive info from being committed
    a. Git pre-commit hook
    b. Sensitive info default to passwords/api keys
    c. Mark as sensitive starting with __
    d. Override with DANGEROUSLY_COMMIT_SENSITIVE_INFO
3. Javascript as config, not JSON