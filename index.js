/* Create, Read, Update and Delete files permissions */
// Create: 00001000 (8)
// Read:   00000100 (4)
// Update: 00000010 (2)
// Delete: 00000001 (1)


const createPermission = 8;   // 1000
const readPermission = 4;     // 0100
const updatePermission = 2;   // 0010
const deletePermission = 1;   // 0001

function hasPermission(permission, permissionToCheck) {
    return (permission & permissionToCheck) === permissionToCheck;
}

const userPermissions = {
    default: 0,
    createAndRead: createPermission | readPermission,
    createAndUpdate: createPermission | updatePermission,
    readAndDelete: readPermission | deletePermission,
    createReadUpdate: createPermission | readPermission | updatePermission,
    '*': createPermission | readPermission | updatePermission | deletePermission,
}

function toBinary(permissions) {
    const bitsArray = permissions.toString(2).split('')
    if (bitsArray.length < 8) {
        bitsArray.unshift('0'.repeat(8 - bitsArray.length));
    }
    return bitsArray.join('');
}

for (const key in userPermissions) {
    console.log(toBinary(userPermissions[key]), key, '=', userPermissions[key]);
}



const exampleUsers = [
    { name: 'John', permission: userPermissions.default, expected: 'No permissions' },
    { name: 'Alice', permission: userPermissions.createAndRead, expected: 'Create and Read permissions' },
    { name: 'Bob', permission: userPermissions.createAndUpdate, expected: 'Create and Update permissions' },
    { name: 'Charlie', permission: userPermissions.readAndDelete, expected: 'Read and Delete permissions' },
    { name: 'Dave', permission: userPermissions.createReadUpdate, expected: 'Create, Read and Update permissions' },
    { name: 'Eve', permission: userPermissions['*'], expected: 'All permissions' },
];


const testUser = (user) => {
    switch (user.permission) {
        case userPermissions['*']:
            return `All permissions`;
        case userPermissions.createReadUpdate:
            return `Create, Read and Update permissions`;
        case userPermissions.createAndRead:
            return `Create and Read permissions`;
        case userPermissions.createAndUpdate:
            return `Create and Update permissions`;
        case userPermissions.readAndDelete:
            return `Read and Delete permissions`;
        case userPermissions.default:
            return `No permissions`;
        default:
            return `Unknown permissions`;
    }
}

const testUsers = (testUsers) => {
    testUsers.forEach(user => {
        if (testUser(user) !== user.expected) {
            console.error(`Test failed for ${user.name}. Expected: ${user.expected}, Got: ${testUser(user)}`);
        } else {
            console.log(`Test passed for ${user.name}`);
        }
    });
}

testUsers(exampleUsers);


