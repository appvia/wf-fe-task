# Task overview

Produce a reusable React component which presents a multi-step wizard to a user.

Use a component library of your choice for the look and feel - we use antd (https://ant.design/) but
any library can be used.

It should have:
* Support for a 'Next' button to move forward to the next step of the wizard.
* Support for an async handler on each step - for example, values from step 1 might be processed asynchronously and used in step 2.
* Support for building a composite state across the steps, to be submitted at the end of the wizard.

To demonstrate the component, the following example use-case can be used:

**Wizard step 1:**
* Collect a name (up to 63 characters) and description (multiline), the async handler for this step should post the name for validation to a back end.

**Wizard step 2:**
* Given a fixed list of possible 'features' that can be selected, each having a
name and description, allow the user to select one or more 'features' to
enable.

**Wizard step 3:**
* Show a summary of the name, description, and the names of features that
have been enabled. Finishing the wizard should submit the values to an
asynchronous back end.

**Dummy back end**
For the purposes of this task, please use the dummy back-end in src/api/dummy-api.ts.
