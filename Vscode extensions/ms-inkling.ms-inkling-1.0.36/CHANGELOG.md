# Inkling extension for Visual Studio Code

## Version 1.0.36 Jun 4, 2021

Changes:

-   Added semantic token support for better colors when used with semantic-aware themes.
-   Added provisional support for selector concepts.

## Version 1.0.35 Mar 26, 2021

Changes:

-   Improved error and warning messages.
-   Updated support for programmed concepts and imported concepts.

## Version 1.0.34 Nov 18, 2020

Changes:

-   Added warnings for numeric types with range constraints that overflow 32-bit floats.
-   Added provisional support for programmed concepts and imported concepts.

## Version 1.0.33 Sep 10, 2020

Changes:

-   Republishing 1.0.32 because of a package corruption issue.

## Version 1.0.32 Sep 2, 2020

Changes:

-   Added support for function calls within constant expressions.

## Version 1.0.31 Aug 23, 2020

Changes:

-   Added "Format Document" command for auto-formatting inkling.

## Version 1.0.30 Aug 14, 2020

Changes:

-   Initial support for selector concepts.

## Version 1.0.29 Aug 11, 2020

Changes:

-   Improved parse error recovery.
-   Added deprecation warning for concepts defined outside of graph.
-   Initial support for programmed concepts.

## Version 1.0.28 Jun 3, 2020

Changes:

-   Added support for expanded types used for actions, states, config types. They can now include nested structs, arrays, scalar values, and structs with field names that include special characters.
-   Added support for double quotes within string literals using backslash escape.

## Version 1.0.27 Apr 16, 2020

Changes:

-   The "output" clause is now optional for graphs with only one concept.
-   The "output" keyword can be used with an line concept declaration rather than a concept reference.

## Version 1.0.25 Mar 19, 2020

Changes:

-   Added support for "scenario" keyword in place of "constraint".

## Version 1.0.24 Mar 11, 2020

Changes:

-   Improved error messages.
-   Enabled support for multi-lesson curriculums, removing the previous warning.
-   Enabled support for goals.
-   Removed support for inkling v1 syntax and conversion between v1 and v2.

## Version 1.0.23 Jan 12, 2020

Changes:

-   Added support for Unicode characters in identifiers.
-   Updated numeric cast logic to always widen type to unconstrained "number" for all variable declarations with inferred types.

## Version 1.0.22 Nov 30, 2019

Changes:

-   Updated parser to allow the use of keywords for identifiers when the grammar is non-ambiguous.
-   Improved parse recovery to improve error reporting in some cases.
-   Eliminated need for simulator statements to use "action" and "config" as parameter names.
-   Added warning for chained comparisons.
-   Added Math.Min and Math.Max methods.

## Version 1.0.21 Oct 16, 2019

Changes:

-   Added hover and type completion support.

## Version 1.0.20 Aug 15, 2019

Changes:

-   Enabled reward and terminal functions and state and action transform functions in curriculum statements.
-   Fixed bug that resulted in infinite loop within parser.

## Version 1.0.19 July 13, 2019

Changes:

-   Added support for state and action transforms in curriculum statements.

## Version 1.0.17 July 10, 2019

Changes:

-   Improved parser error recovery and error messages.
-   Added support for Math namespace constants and functions.

## Version 1.0.16 July 9, 2019

Changes:

-   Added support for new VS Code setting "inkling.enableAllFeatures" that enables all inkling features, even those that are experimental or not yet fully implemented.
-   Added support for inkling-based reward and terminal functions.

## Version 1.0.15 June 26, 2019

Changes:

-   Added support for new PPO algorithm parameter "BatchSize".

## Version 1.0.14 June 14, 2019

Changes:

-   Multi-concept graphs now generate errors.
-   Multi-lesson curriculums generate warnings.
    Bug Fixes:
-   Errors and warnings are dismissed within VS Code after a file is closed.

## Version 1.0.13 May 28, 2019

Bug Fixes:

-   When inkling file is closed, clear diagnostics.

## Version 1.0.12 February 14, 2019

Features:

-   Support for both Inkling v1 and v2 languages.
-   Syntax coloring.
-   Error and warning reporting.
-   Command to convert between v1 and v2 Inkling versions.
