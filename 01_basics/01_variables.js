const accountId = 144553
let accountEmail = "kamal@google.com"
var accounPass = "Gu@54321"
accountCity = "Aonla"
let accountState;

// accountId = 27673    //not allowed cause value is const
//  Assignment to constant variable.


accountEmail = "kc@microsoft.com"
accounPass = "243301"
accountCity = "Bengluru"

console.log(accountId);     //144553
console.log(accountEmail);  // kc@microsoft.com
console.log(accounPass);    // 243301

/**
 * Prefer not to use var
 * cause of issue in block scope and functional scope
 */

console.table([accountId, accountEmail, accounPass, accountCity, accountState])

/**
┌─────────┬────────────────────┐
│ (index) │ Values             │
├─────────┼────────────────────┤
│ 0       │ 144553             │
│ 1       │ 'kc@microsoft.com' │
│ 2       │ '243301'           │
│ 3       │ 'Bengluru'         │
│ 4       │ undefined          │
└─────────┴────────────────────┘ 
 */