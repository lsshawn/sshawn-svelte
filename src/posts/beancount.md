# Beancount

<!-- vim-markdown-toc GFM -->

* [Introduction](#introduction)
  * [Company structure](#company-structure)
  * [What you'll need to do](#what-youll-need-to-do)
  * [Claimable expenses](#claimable-expenses)
  * [Out of pocket expenses](#out-of-pocket-expenses)
* [Accounting system](#accounting-system)
  * [Why Beancount](#why-beancount)
  * [Syntax](#syntax)
  * [Tags for clients or projects](#tags-for-clients-or-projects)
  * [Fava](#fava)
  * [Folder structure](#folder-structure)
  * [Future tasks](#future-tasks)
  * [I'll give you these login details](#ill-give-you-these-login-details)
  * [What you'll need to install](#what-youll-need-to-install)

<!-- vim-markdown-toc -->

# Introduction

## Company structure

My company is 'Cupbots OU' and it's registered in Estonia.

## What you'll need to do

Every month, you'll need to:
1. Download invoices & receipts from 'sshawn@tutanota.com` email. Then upload these into Mega.nz cloud drive
2. Add journal entry

If you feel something is taking a lot of your time, please share because I might be able to code something up.

You have a stronger accounting background than me. So if you see something in the journal that can be improved, please let me know.

## Claimable expenses

I don't claim food and gifts expenses.

Read here for a list of claimable expenses in Estonia: https://www.xolo.io/faq/xolo-leap/category/get-started/article/which-costs-am-i-allowed-to-claim-as-business-expenses

## Out of pocket expenses

All expenses are paid using my personal account.

So in my company account, all expenses are recorded as out of pocket.

I'll payback to my personal account in the future.

# Accounting system

I've recorded a video overview here: https://youtu.be/K0ctUDORDto

## Why Beancount

- It's just a text file.
- Easy to backup.
- Open source. I'm not worried if the accounting software cease business.
- Developer friendly.

If you'd like to know more, read https://beancount.github.io/docs/command_line_accounting_in_context.html


## Syntax

Documentation: https://beancount.github.io/docs/beancount_language_syntax.html

## Tags for clients or projects

Use tag to tag expenses or income to a client or project

E.g. I'm tagging these expenses to a client named 'songheng'.

```
2021-01-01 * #songheng
  Expenses:Travel:Transport:Petrol                                 63.15 MYR
  Expenses:Travel:Transport:Others                                 50.00 MYR
  Liabilities:Out-of-pocket
```

No spaces. Just dash.

## Fava

Fava allows us to view summaries and charts for our beancount file.

Demo: https://fava.pythonanywhere.com/example-beancount-file/income_statement/

## Folder structure

You must follow the chart of account in the journal. This is for Fava to automatically get the link for the invoices.

E.g. For Digital Ocean expenses, I record them as `Expenses:Office:Subscriptions:Digital-ocean`. So PDF invoices from Digital ocean will put placed `Expenses/Office/Subscriptions/Digital-ocean`.

Please do not use spaces in folder names. Replace them with dash (-).

And don't create subfolders for each year.

## Future tasks

- VAT
- Create annual reports

## I'll give you these login details
- Mega.nz cloud folder
- sshawn@tutanota.com email to process monthly expenses & income.

## What you'll need to install
- [Fava](https://beancount.github.io/fava/)
- [Python programming language to run Fava](https://www.python.org/downloads/)

Optional:
- [Sublime text editor](https://www.sublimetext.com/). Or else, use your Notepad to edit.
- [Mega.nz](mega.nz) to sync files to your laptop. Or else, just go to the web browser and upload the new files.

