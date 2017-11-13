export class AccountsService {
  accounts = [
    {
      name: 'Master Account',
      status: 'active'
    },
    {
      name: 'Testaccount',
      status: 'inactive'
    },
    {
      name: 'Hidden Account',
      status: 'unknown'
    }
  ];

  addAccount(name: string, status: string) {
    const newAccount  = { name, status };
    this.accounts.push(newAccount);
  }

  updateStatus(id: number, newStatus: string) {
    this.accounts[id].status = newStatus;
  }
}
