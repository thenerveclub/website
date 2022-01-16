---
title: 'Introducing NERVE'
date: '2020-08-06'
author: 'Nerve'
featuredImage: ./banner.png
previewText: 'An extended ERC-20 token based on the Ethereum blockchain.'
---

# Token Economy

The token is an extended ERC-20 token based on the Ethereum blockchain. 

In the process of creating a task, 5.00% fee is deducted from the initial stake, which on the one hand benefits the community and on the other hand counteracts possible attack scenarios. The initial stake of the task creator is obligatory for all further participants as a minimum stake. The fee in the amount of 5.00% also exists here.

The fees are automatically added to the **NexusBurn** (see below).

At the same time, new NERVE tokens are created, the quantity of which is derived from the current market price and the amount of the fee paid.
The participant receives 75.00% of newly created NERVE tokens according to the fee paid.
25.00% will accrue to **NexusShares** (see below).

#
- **Two final scenarios will be created for each task**:

The task is scored Negative by the majority. In this outcome, all participants, as well as the creator of the task, will receive their stake back. The previously collected fee is not returned.

The task is evaluated positively by the majority. In this outcome, the creator of the task receives 95.00% of the total stake. 5.00% will go to the **NexusBurn** (see below).



No minimum stake is set for the bets. As soon as the bet is closed and finished, the winners can pay out their stake + winnings. 10.00% of the winnings go to the **NexusBurn** Contract. The bettor receives NERVE tokens when the bet is closed, calculated based on the current market price and the fee paid. Thereby 75.00% of the newly created tokens go to the bettor and 25.00% to **NexusShares**.



# BuyBack Model & NexusBurn Contract

Once the function 

> initiateBuyBack(uint256 timestamp)

is called from the **NexusBurn** Contract, the collected fees are used to buy back NERVE tokens via the **NerveswapV2Router**. These are transferred to the NexusBurn Contract and destroyed using the following burn function:

> NERVE.burnNerve(address(this), NERVE.balanceOf(address(this)) - incentiveFee);

To ensure the highest possible execution rate of this function, the app displays it to users. As an incentive, the user receives a bonus of 0.10% of the repurchased NERVE tokens. As soon as the bonus exceeds the transaction costs incurred, it is worthwhile for the user to execute the function.


# Funds Distribution Contract | NexusShares

For any newly created NERVE tokens, 20.00% will flow to the foundation. This results in the further following allocation:

- 5% Team
- 20% Foundation and future investors (see Private Sale)
- 75% Community