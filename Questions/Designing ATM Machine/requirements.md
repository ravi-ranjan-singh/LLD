## What are the requirements of the system?

- Single Transaction Support: The system should allow only one transaction at a time for a particular user. No concurrent transactions.

- Start Button: The ATM machine should have a Start button to initiate the transaction.

- Card Insertion: Once the transaction starts, the machine should prompt the user to insert their card.
The system should validate the card details upon insertion.

- Card Validation: If the card is invalid, the system should reject it and return it to the user.

- Cash Withdrawal:
  - After validating the card, the system should ask the user to enter the withdrawal amount.
  - The system should validate if the withdrawal amount can be dispensed based on the account balance and machine capacity.

- Cancellation Support:
  - Allowed Scenarios:
    - Before inserting the card.
    - After being prompted to insert the card.
