@extends('layouts.app')
@section('title', '首页')

@section('content')
    @include('layouts._service')
    @include('layouts._research')
    @include('layouts._advantages')
    @include('layouts._appointment')
    @include('layouts._team')
@stop