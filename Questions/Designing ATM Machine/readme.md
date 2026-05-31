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


## Solution

Our system is in a lot of different state. On each state we are allowed to do some functionalities but not all. When you have lot of states in your system , think of your system as state machine

State machine is a system in which you have different different possible states of the system and the system can go from one state to another state.

State -> situation of your system at any point of time and it will be a defined situation

The ATM machine is a typical case of creating state machine. The concrete solution for these kind of problems which involves any kind of state comes from state design pattern

You need to have a state interface and a lot of classes are going to implement this state interface. These state classes should have a couple of things -
 - What Should happen when any interaction/action (a method call) is done on a particular state
 - We need to write the system in such a way that when we are on one state, we are able to transition to other state i.e have a mechanism to change the state


For the solution , check state design pattern
