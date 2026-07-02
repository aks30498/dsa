var simplifyPath = function (path) {
    const stack = [];
    // Split the path by '/' to isolate folder names and actions
    const components = path.split('/');

    for (const part of components) {
        // If it's empty (from '//') or a single dot (current directory), do nothing
        if (part === '' || part === '.') {
            continue;
        }
        
        // If it's a double dot, go up one directory level by popping
        if (part === '..') {
            stack.pop(); 
        } else {
            // It's a valid directory name, push it to our stack
            stack.push(part);
        }
    }

    // Join elements with '/' and ensure it starts with a leading '/'
    return '/' + stack.join('/');
};