---

<a name="classes"></a>
## Classes


---

<a name="EclipticCoordinates"></a>
### class EclipticCoordinates

**Ecliptic angular and Cartesian coordinates.**

Coordinates of a celestial body as seen from the center of the Sun (heliocentric),
oriented with respect to the plane of the Earth's orbit around the Sun (the ecliptic).


| Type | Attribute | Description |
| --- | --- | --- |
| `float` | `ex` | Cartesian x-coordinate: in the direction of the equinox along the ecliptic plane. |
| `float` | `ey` | Cartesian y-coordinate: in the ecliptic plane 90 degrees prograde from the equinox. |
| `float` | `ez` | Cartesian z-coordinate: perpendicular to the ecliptic plane. Positive is north. |
| `float` | `elat` | Latitude in degrees north (positive) or south (negative) of the ecliptic plane. |
| `float` | `elon` | Longitude in degrees around the ecliptic plane prograde from the equinox. |




---

<a name="ElongationEvent"></a>
### class ElongationEvent

**Contains information about the visibility of a celestial body at a given date and time.**

See the #Elongation function for more detailed information about the members of this class.
See also #SearchMaxElongation for how to search for maximum elongation events.


| Type | Attribute | Description |
| --- | --- | --- |
| [`Time`](#Time) | `time` | The date and time of the observation. |
| [`Visibility`](#Visibility) | `visibility` | Whether the body is best seen in the morning or the evening. |
| `float` | `elongation` | The angle in degrees between the body and the Sun, as seen from the Earth. |
| `float` | `ecliptic_separation` | The difference between the ecliptic longitudes of the body and the Sun, as seen from the Earth. |




---

<a name="Equatorial"></a>
### class Equatorial

**Equatorial angular coordinates**

Coordinates of a celestial body as seen from the Earth.
Can be geocentric or topocentric, depending on context.
The coordinates are oriented with respect to the Earth's
equator projected onto the sky.


| Type | Attribute | Description |
| --- | --- | --- |
| `float` | `ra` | Right ascension in sidereal hours. |
| `float` | `dec` | Declination in degrees. |
| `float` | `dist` | Distance to the celestial body in AU. |




---

<a name="HorizontalCoordinates"></a>
### class HorizontalCoordinates

**Coordinates of a celestial body as seen by a topocentric observer.**

Contains horizontal and equatorial coordinates as seen by an observer
on or near the surface of the Earth (a topocentric observer).
All coordinates are optionally corrected for atmospheric refraction.


| Type | Attribute | Description |
| --- | --- | --- |
| `float` | `azimuth` | The compass direction laterally around the observer's horizon, measured in degrees. North is 0 degrees, east is 90 degrees, south is 180 degrees, etc. |
| `float` | `altitude` | The angle in degrees above (positive) or below (negative) the observer's horizon. |
| `float` | `ra` | The right ascension in sidereal hours. |
| `float` | `dec` | The declination in degrees. |




---

<a name="Observer"></a>
### class Observer

**Represents the geographic location of an observer on the surface of the Earth.**

| Type | Parameter | Description |
| --- | --- | --- |
| `float` | `latitude` | Geographic latitude in degrees north of the equator. |
| `float` | `longitude` | Geographic longitude in degrees east of the prime meridian at Greenwich, England. |
| `float` | `height` | Elevation above sea level in meters. |




---

<a name="Time"></a>
### class Time

**Represents a date and time used for performing astronomy calculations.**

All calculations performed by Astronomy Engine are based on
dates and times represented by `Time` objects.


| Type | Parameter | Description |
| --- | --- | --- |
| `float` | `ut` | UT1/UTC number of days since noon on January 1, 2000. See the `ut` attribute of this class for more details. |

| Type | Attribute | Description |
| --- | --- | --- |
| `float` | `ut` | The floating point number of days of Universal Time since noon UTC January 1, 2000. Astronomy Engine approximates UTC and UT1 as being the same thing, although they are not exactly equivalent; UTC and UT1 can disagree by up to 0.9 seconds. This approximation is sufficient for the accuracy requirements of Astronomy Engine. Universal Time Coordinate (UTC) is the international standard for legal and civil timekeeping and replaces the older Greenwich Mean Time (GMT) standard. UTC is kept in sync with unpredictable observed changes in the Earth's rotation by occasionally adding leap seconds as needed. UT1 is an idealized time scale based on observed rotation of the Earth, which gradually slows down in an unpredictable way over time, due to tidal drag by the Moon and Sun, large scale weather events like hurricanes, and internal seismic and convection effects. Conceptually, UT1 drifts from atomic time continuously and erratically, whereas UTC is adjusted by a scheduled whole number of leap seconds as needed. The value in `ut` is appropriate for any calculation involving the Earth's rotation, such as calculating rise/set times, culumination, and anything involving apparent sidereal time. Before the era of atomic timekeeping, days based on the Earth's rotation were often known as *mean solar days*. |
| `float` | `tt` | Terrestrial Time days since noon on January 1, 2000. Terrestrial Time is an atomic time scale defined as a number of days since noon on January 1, 2000. In this system, days are not based on Earth rotations, but instead by the number of elapsed [SI seconds](https://physics.nist.gov/cuu/Units/second.html) divided by 86400. Unlike `ut`, `tt` increases uniformly without adjustments for changes in the Earth's rotation. The value in `tt` is used for calculations of movements not involving the Earth's rotation, such as the orbits of planets around the Sun, or the Moon around the Earth. Historically, Terrestrial Time has also been known by the term *Ephemeris Time* (ET). |



#### member functions


<a name="Time.Make"></a>
### Time.Make(year, month, day, hour, minute, second)

**Creates a #Time object from a UTC calendar date and time.**

| Type | Parameter | Description |
| --- | --- | --- |
| `int` | `year` | The UTC 4-digit year value, e.g. 2019. |
| `int` | `month` | The UTC month in the range 1..12. |
| `int` | `day` | The UTC day of the month, in the range 1..31. |
| `int` | `hour` | The UTC hour, in the range 0..23. |
| `int` | `minute` | The UTC minute, in the range 0..59. |
| `float` | `second` | The real-valued UTC second, in the range [0, 60). |




---

<a name="Vector"></a>
### class Vector

**A Cartesian vector with 3 space coordinates and 1 time coordinate.**

The vector's space coordinates are measured in astronomical units (AU).
The coordinate system varies and depends on context.
The vector also includes a time stamp.


| Type | Attribute | Description |
| --- | --- | --- |
| `float` | `x` | The x-coordinate of the vector, measured in AU. |
| `float` | `y` | The y-coordinate of the vector, measured in AU. |
| `float` | `z` | The z-coordinate of the vector, measured in AU. |
| [`Time`](#Time) | `t` | The date and time at which the coordinate is valid. |



#### member functions


<a name="Vector.Length"></a>
### Vector.Length(self)

Returns the length of the vector in AU.




---

<a name="enumerations"></a>
## Enumerated Types


---

<a name="ApsisKind"></a>
### enum ApsisKind

**Represents whether a satellite is at a closest or farthest point in its orbit.**

An apsis is a point in a satellite's orbit that is closest to,
or farthest from, the body it orbits (its primary).
`ApsisKind` is an enumerated type that indicates which of these
two cases applies to a particular apsis event.


| Value | Description |
| --- | --- |
| `Pericenter` | The satellite is at its closest point to its primary. |
| `Apocenter` | The satellite is at its farthest point from its primary. |
| `Invalid` | A placeholder for an undefined, unknown, or invalid apsis. |



---

<a name="Body"></a>
### enum Body

**The celestial bodies supported by Astronomy Engine calculations.**

| Value | Description |
| --- | --- |
| `Invalid` | An unknown, invalid, or undefined celestial body. |
| `Mercury` | The planet Mercury. |
| `Venus` | The planet Venus. |
| `Earth` | The planet Earth. |
| `Mars` | The planet Mars. |
| `Jupiter` | The planet Jupiter. |
| `Saturn` | The planet Saturn. |
| `Uranus` | The planet Uranus. |
| `Neptune` | The planet Neptune. |
| `Pluto` | The planet Pluto. |
| `Sun` | The Sun. |
| `Moon` | The Earth's moon. |



---

<a name="Direction"></a>
### enum Direction

**Indicates whether a body is rising above or setting below the horizon.**

Specifies the direction of a rising or setting event for a body.
For example, `Direction.Rise` is used to find sunrise times,
and `Direction.Set` is used to find sunset times.


| Value | Description |
| --- | --- |
| `Rise` | First appearance of a body as it rises above the horizon. |
| `Set` | Last appearance of a body as it sinks below the horizon. |



---

<a name="Refraction"></a>
### enum Refraction

**Selects if/how to correct for atmospheric refraction.**

Some functions allow enabling or disabling atmospheric refraction
for the calculated apparent position of a celestial body
as seen by an observer on the surface of the Earth.


| Value | Description |
| --- | --- |
| `Airless` | No atmospheric refraction correction. |
| `Normal` | Recommended correction for standard atmospheric refraction. |
| `JplHorizons` | Used only for compatibility testing with JPL Horizons online tool. |



---

<a name="Visibility"></a>
### enum Visibility

**Indicates whether a body (especially Mercury or Venus) is best seen in the morning or evening.**

| Value | Description |
| --- | --- |
| `Morning` | The body is best visible in the morning, before sunrise. |
| `Evening` | The body is best visible in the evening, after sunset. |


---

<a name="errors"></a>
## Error Types


---

<a name="BadVectorError"></a>
### BadVectorError

A vector magnitude is too small to have a direction in space.





---

<a name="EarthNotAllowedError"></a>
### EarthNotAllowedError

The Earth is not allowed as the celestial body in this calculation.





---

<a name="Error"></a>
### Error

Indicates an error in an astronomical calculation.





---

<a name="InternalError"></a>
### InternalError

**An internal error occured that should be reported as a bug.**

Indicates an unexpected and unrecoverable condition occurred.
If you encounter this error using Astronomy Engine, it would be very
helpful to report it at the [Issues](https://github.com/cosinekitty/astronomy/issues)
page on GitHub. Please include a copy of the stack trace, along with a description
of how to reproduce the error. This will help improve the quality of
Astronomy Engine for everyone! (Thank you in advance from the author.)





---

<a name="InvalidBodyError"></a>
### InvalidBodyError

The celestial body is not allowed for this calculation.





---

<a name="NoConvergeError"></a>
### NoConvergeError

**A numeric solver did not converge.**

Indicates that there was a failure of a numeric solver to converge.
If you encounter this error using Astronomy Engine, it would be very
helpful to report it at the [Issues](https://github.com/cosinekitty/astronomy/issues)
page on GitHub. Please include a copy of the stack trace, along with a description
of how to reproduce the error. This will help improve the quality of
Astronomy Engine for everyone! (Thank you in advance from the author.)




---

<a name="functions"></a>
## Functions


---

<a name="AngleFromSun"></a>
### AngleFromSun(body, time)

**Returns the angle between the given body and the Sun, as seen from the Earth.**

This function calculates the angular separation between the given body and the Sun,
as seen from the center of the Earth. This angle is helpful for determining how
easy it is to see the body away from the glare of the Sun.


| Type | Parameter | Description |
| --- | --- | --- |
| [`Body`](#Body) | `body` | The celestial body whose angle from the Sun is to be measured. Not allowed to be `Body.Earth`. |
| [`Time`](#Time) | `time` | The time at which the observation is made. |




---

<a name="BodyCode"></a>
### BodyCode(name)

**Finds the Body enumeration value, given the name of a body.**

```
>>> astronomy.BodyCode('Mars')
<Body.Mars: 3>
```


| Type | Parameter | Description |
| --- | --- | --- |
| `str` | `name` | The common English name of a supported celestial body. |




---

<a name="Ecliptic"></a>
### Ecliptic(equ)

**Converts J2000 equatorial Cartesian coordinates to J2000 ecliptic coordinates.**

Given coordinates relative to the Earth's equator at J2000 (the instant of noon UTC
on 1 January 2000), this function converts those coordinates to J2000 ecliptic coordinates,
which are relative to the plane of the Earth's orbit around the Sun.
equ : EquatorialCoordinates
    Equatorial coordinates in the J2000 frame of reference.





---

<a name="EclipticLongitude"></a>
### EclipticLongitude(body, time)

**Calculates heliocentric ecliptic longitude of a body based on the J2000 equinox.**

This function calculates the angle around the plane of the Earth's orbit
of a celestial body, as seen from the center of the Sun.
The angle is measured prograde (in the direction of the Earth's orbit around the Sun)
in degrees from the J2000 equinox. The ecliptic longitude is always in the range [0, 360).
time : Time
    The date and time at which the body's ecliptic longitude is to be calculated.


| Type | Parameter | Description |
| --- | --- | --- |
| [`Body`](#Body) | `body` | A body other than the Sun. |




---

<a name="Elongation"></a>
### Elongation(body, time)

**Determines visibility of a celestial body relative to the Sun, as seen from the Earth.**

This function returns an #ElongationEvent object, which provides the following
information about the given celestial body at the given time:
- `visibility` is an enumerated type that specifies whether the body is more
  easily seen in the morning before sunrise, or in the evening after sunset.
- `elongation` is the angle in degrees between two vectors: one from the center
  of the Earth to the center of the Sun, the other from the center of the Earth
  to the center of the specified body. This angle indicates how far away the body
  is from the glare of the Sun. The elongation angle is always in the range [0, 180].
- `ecliptic_separation` is the absolute value of the difference between the body's
  ecliptic longitude and the Sun's ecliptic longitude, both as seen from the center
  of the Earth. This angle measures around the plane of the Earth's orbit, and ignores
  how far above or below that plane the body is.
  The ecliptic separation is measured in degrees and is always in the range [0, 180].
time : Time
    The date and time of the observation.


| Type | Parameter | Description |
| --- | --- | --- |
| [`Body`](#Body) | `body` | The celestial body whose visibility is to be calculated. |




---

<a name="Equator"></a>
### Equator(body, time, observer, ofdate, aberration)

**Calculates equatorial coordinates of a celestial body as seen by an observer on the Earth's surface.**

Calculates topocentric equatorial coordinates in one of two different systems:
J2000 or true-equator-of-date, depending on the value of the `ofdate` parameter.
Equatorial coordinates include right ascension, declination, and distance in astronomical units.
This function corrects for light travel time: it adjusts the apparent location
of the observed body based on how long it takes for light to travel from the body to the Earth.
This function corrects for *topocentric parallax*, meaning that it adjusts for the
angular shift depending on where the observer is located on the Earth. This is most
significant for the Moon, because it is so close to the Earth. However, parallax corection
has a small effect on the apparent positions of other bodies.
Correction for aberration is optional, using the `aberration` parameter.


| Type | Parameter | Description |
| --- | --- | --- |
| [`Body`](#Body) | `body` | The celestial body to be observed. Not allowed to be `Body.Earth`. |
| [`Time`](#Time) | `time` | The date and time at which the observation takes place. |
| [`Observer`](#Observer) | `observer` | A location on or near the surface of the Earth. |
| `bool` | `ofdate` | Selects the date of the Earth's equator in which to express the equatorial coordinates. If `True`, returns coordinates using the equator and equinox of date. If `False`, returns coordinates converted to the J2000 system. |
| `bool` | `aberration` | If `True`, corrects for aberration of light based on the motion of the Earth with respect to the heliocentric origin. If `False`, does not correct for aberration. |




---

<a name="GeoMoon"></a>
### GeoMoon(time)

**Calculates the geocentric position of the Moon at a given time.**

Given a time of observation, calculates the Moon's position as a vector.
The vector gives the location of the Moon's center relative to the Earth's center
with x-, y-, and z-components measured in astronomical units.
This algorithm is based on Nautical Almanac Office's *Improved Lunar Ephemeris* of 1954,
which in turn derives from E. W. Brown's lunar theories from the early twentieth century.
It is adapted from Turbo Pascal code from the book
[Astronomy on the Personal Computer](https://www.springer.com/us/book/9783540672210)
by Montenbruck and Pfleger.


| Type | Parameter | Description |
| --- | --- | --- |
| [`Time`](#Time) | `time` | The date and time for which to calculate the Moon's position. |




---

<a name="GeoVector"></a>
### GeoVector(body, time, aberration)

**Calculates geocentric Cartesian coordinates of a body in the J2000 equatorial system.**

This function calculates the position of the given celestial body as a vector,
using the center of the Earth as the origin.  The result is expressed as a Cartesian
vector in the J2000 equatorial system: the coordinates are based on the mean equator
of the Earth at noon UTC on 1 January 2000.
If given an invalid value for `body`, or the body is `Body.Pluto` and the `time` is outside
the year range 1700..2200, this function will raise an exception.
Unlike #HelioVector, this function always corrects for light travel time.
This means the position of the body is "back-dated" by the amount of time it takes
light to travel from that body to an observer on the Earth.
Also, the position can optionally be corrected for
[aberration](https://en.wikipedia.org/wiki/Aberration_of_light), an effect
causing the apparent direction of the body to be shifted due to transverse
movement of the Earth with respect to the rays of light coming from that body.


| Type | Parameter | Description |
| --- | --- | --- |
| [`Body`](#Body) | `body` | A body for which to calculate a heliocentric position: the Sun, Moon, or any of the planets. |
| [`Time`](#Time) | `time` | The date and time for which to calculate the position. |
| `bool` | `aberration` | A boolean value indicating whether to correct for aberration. |




---

<a name="HelioVector"></a>
### HelioVector(body, time)

**Calculates heliocentric Cartesian coordinates of a body in the J2000 equatorial system.**

This function calculates the position of the given celestial body as a vector,
using the center of the Sun as the origin.  The result is expressed as a Cartesian
vector in the J2000 equatorial system: the coordinates are based on the mean equator
of the Earth at noon UTC on 1 January 2000.
The position is not corrected for light travel time or aberration.
This is different from the behavior of #GeoVector.
If given an invalid value for `body`, or the body is `Body.Pluto` and `time` is outside
the year range 1700..2200, this function raise an exception.


| Type | Parameter | Description |
| --- | --- | --- |
| [`Body`](#Body) | `body` | The celestial body whose heliocentric position is to be calculated: The Sun, Moon, or any of the planets. |
| [`Time`](#Time) | `time` | The time at which to calculate the heliocentric position. |




---

<a name="Horizon"></a>
### Horizon(time, observer, ra, dec, refraction)

**Calculates the apparent location of a body relative to the local horizon of an observer on the Earth.**

Given a date and time, the geographic location of an observer on the Earth, and
equatorial coordinates (right ascension and declination) of a celestial body,
this function returns horizontal coordinates (azimuth and altitude angles) for the body
relative to the horizon at the geographic location.
The right ascension `ra` and declination `dec` passed in must be *equator of date*
coordinates, based on the Earth's true equator at the date and time of the observation.
Otherwise the resulting horizontal coordinates will be inaccurate.
Equator of date coordinates can be obtained by calling #Equator, passing in
`True` as its `ofdate` parameter. It is also recommended to enable
aberration correction by passing in `True` for the `aberration` parameter.
This function optionally corrects for atmospheric refraction.
For most uses, it is recommended to pass `Refraction.Normal` in the `refraction` parameter to
correct for optical lensing of the Earth's atmosphere that causes objects
to appear somewhat higher above the horizon than they actually are.
However, callers may choose to avoid this correction by passing in `Refraction.Airless`.
If refraction correction is enabled, the azimuth, altitude, right ascension, and declination
in the #HorizontalCoordinates object returned by this function will all be corrected for refraction.
If refraction is disabled, none of these four coordinates will be corrected; in that case,
the right ascension and declination in the returned object will be numerically identical
to the respective `ra` and `dec` values passed in.





---

<a name="LongitudeFromSun"></a>
### LongitudeFromSun(body, time)

**Returns a body's ecliptic longitude with respect to the Sun, as seen from the Earth.**

This function can be used to determine where a planet appears around the ecliptic plane
(the plane of the Earth's orbit around the Sun) as seen from the Earth,
relative to the Sun's apparent position.
The angle starts at 0 when the body and the Sun are at the same ecliptic longitude
as seen from the Earth. The angle increases in the prograde direction
(the direction that the planets orbit the Sun and the Moon orbits the Earth).
When the angle is 180 degrees, it means the Sun and the body appear on opposite sides
of the sky for an Earthly observer. When `body` is a planet whose orbit around the
Sun is farther than the Earth's, 180 degrees indicates opposition. For the Moon,
it indicates a full moon.
The angle keeps increasing up to 360 degrees as the body's apparent prograde
motion continues relative to the Sun. When the angle reaches 360 degrees, it starts
over at 0 degrees.
Values between 0 and 180 degrees indicate that the body is visible in the evening sky
after sunset.  Values between 180 degrees and 360 degrees indicate that the body
is visible in the morning sky before sunrise.
time : Time
    The date and time of the observation.


| Type | Parameter | Description |
| --- | --- | --- |
| [`Body`](#Body) | `body` | The celestial body for which to find longitude from the Sun. |




---

<a name="Search"></a>
### Search(func, context, t1, t2, dt_tolerance_seconds)

**Searches for a time at which a function's value increases through zero.**

Certain astronomy calculations involve finding a time when an event occurs.
Often such events can be defined as the root of a function:
the time at which the function's value becomes zero.
`Search` finds the *ascending root* of a function: the time at which
the function's value becomes zero while having a positive slope. That is, as time increases,
the function transitions from a negative value, through zero at a specific moment,
to a positive value later. The goal of the search is to find that specific moment.
The search function is specified by two parameters: `func` and `context`.
The `func` parameter is a function itself that accepts a time
and a context containing any other arguments needed to evaluate the function.
The `context` parameter supplies that context for the given search.
As an example, a caller may wish to find the moment a celestial body reaches a certain
ecliptic longitude. In that case, the caller might create a type (class, tuple, whatever)
that contains a #Body member to specify the body and a numeric value to hold the target longitude.
A different function might use a completely different context type.
Every time it is called, `func` returns a `float` value or it raises an exception.
If `func` raises an exception, the search immediately fails and the exception is
propagated back to the caller.
Otherwise, the search proceeds until it either finds the ascending root or fails for some reason.
The search calls `func` repeatedly to rapidly narrow in on any ascending
root within the time window specified by `t1` and `t2`. The search never
reports a solution outside this time window.
`Search` uses a combination of bisection and quadratic interpolation
to minimize the number of function calls. However, it is critical that the
supplied time window be small enough that there cannot be more than one root
(ascedning or descending) within it; otherwise the search can fail.
Beyond that, it helps to make the time window as small as possible, ideally
such that the function itself resembles a smooth parabolic curve within that window.
If an ascending root is not found, or more than one root
(ascending and/or descending) exists within the window `t1`..`t2`,
`Search` will return `None` to indicate a normal search failure.
If the search does not converge within 20 iterations, it will raise
an #Error exception.
context : object
    An arbitrary data structure needed to be passed to the function `func`
    every time it is called.
t1 : float
    The lower time bound of the search window.
    See remarks above for more details.
t2 : float
    The upper time bound of the search window.
    See remarks above for more details.
dt_tolerance_seconds : float
    Specifies an amount of time in seconds within which a bounded ascending root
    is considered accurate enough to stop. A typical value is 1 second.


| Type | Parameter | Description |
| --- | --- | --- |
| `function(context, Time)` | `func` | A function that takes an arbitrary context parameter and a #Time parameter. Returns a float value.  See remarks above for more details. |




---

<a name="SunPosition"></a>
### SunPosition(time)

**Calculates geocentric ecliptic coordinates for the Sun.**

This function calculates the position of the Sun as seen from the Earth.
The returned value includes both Cartesian and spherical coordinates.
The x-coordinate and longitude values in the returned object are based
on the *true equinox of date*: one of two points in the sky where the instantaneous
plane of the Earth's equator at the given date and time (the *equatorial plane*)
intersects with the plane of the Earth's orbit around the Sun (the *ecliptic plane*).
By convention, the apparent location of the Sun at the March equinox is chosen
as the longitude origin and x-axis direction, instead of the one for September.
`SunPosition` corrects for precession and nutation of the Earth's axis
in order to obtain the exact equatorial plane at the given time.
This function can be used for calculating changes of seasons: equinoxes and solstices.
In fact, the function #Seasons does use this function for that purpose.


| Type | Parameter | Description |
| --- | --- | --- |
| [`Time`](#Time) | `time` | The date and time for which to calculate the Sun's position. |


